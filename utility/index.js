class Utility {
  /*
   * return null if invalid
   */
  pageLengthToOffsetLimit({ page, length }) {
    let _page = parseInt(page);
    let _length = parseInt(length);

    // using limit
    if (_length > 0) {
      var limit = _length;
    } else return null;

    // using offset
    if (_page > 0) {
      var offset = (_page - 1) * length;
    } else return null;

    return {
      limit,
      offset,
    };
  }
}

module.exports = new Utility();
