const model = require('../../models/ping');

const ATTRIBUTES_EXCLUDE_DATE = ['createdAt', 'updatedAt', 'deletedAt'];

module.exports = (sequelize) => {
  let query = model(sequelize);

  return {
    getModel: ({ id, limit, }) => {
      return new Promise(async (resolve, reject) => {
        let where = {};
        if (id) {
          where.id = id;
          limit = 1;
        }

        try {
          var data = await query.findAll({
            attributes: {
              exclude: ATTRIBUTES_EXCLUDE_DATE,
            },
            where,
            limit,
            raw: true,
          });
        } catch (e) {
          return reject(e);
        }

        resolve(data);
      });
    },
    createModel: ({ name, }) => {
      return new Promise((resolve, reject) => {
        query.create({ name, }, {
          attributes: {
            exclude: ATTRIBUTES_EXCLUDE_DATE,
          },
          raw: true
        }).then((resp) => {
          resolve(resp);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    updateModel: ({ id, name, }) => {
      return new Promise((resolve, reject) => {
        query.update({ name, }, {
          where: {
            id,
          }
        }).then((resp) => {
          resolve(resp);
        }).catch((err) => {
          reject(err);
        });
      });
    },

    deleteModel: ({ id }) => {
      return new Promise((resolve, reject) => {
        query.destroy({
          where: {
            id
          }
        }).then((resp) => {
          resolve(resp);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  };
};
