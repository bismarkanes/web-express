class Utility {
  /**
   * Convert query searchMax, searchIndex into SQL limit offset parameter
   * @param {Object} param
   * @param {string} param.searchMax
   * @param {string} param.searchIndex
   * @return {{ limit: number, offset: number }}
   */
  parseSearchToLimitOffset({ searchMax, searchIndex, }) {
    let limit = parseInt(searchMax);
    if (isNaN(limit)) throw new Error('ERR_INVALID_searchMax');

    let offset = limit * parseInt(searchIndex);
    if (isNaN(offset)) throw new Error('ERR_INVALID_searchIndex');

    return { limit, offset };
  }
}

module.exports = new Utility();
