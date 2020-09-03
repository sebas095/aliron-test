class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.findById(id);
  }

  async getBy(filter) {
    return await this.model.find(filter);
  }

  async getAll(pageSize = 20, pageNum = 1, filter = {}) {
    // skip - limit
    /**
     * Returns true if num is a number type positive
     * @param  num
     * @returns  {boolean}
     */
    const isValid = (num) => !isNaN(parseInt(num)) && num > 0;

    pageSize = isValid(pageSize) ? pageSize : 5;
    pageNum = isValid(pageNum) ? pageNum : 1;

    const skips = pageSize * (pageNum - 1);
    return await this.model.find(filter).skip(skips).limit(pageSize);
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    await this.model.findByIdAndDelete(id);
    return true;
  }
}

module.exports = BaseRepository;
