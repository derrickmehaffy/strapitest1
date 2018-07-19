'use strict';

/**
 * Testmodel.js controller
 *
 * @description: A set of functions called "actions" for managing `Testmodel`.
 */

module.exports = {

  /**
   * Retrieve testmodel records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.testmodel.search(ctx.query);
    } else {
      return strapi.services.testmodel.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a testmodel record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.testmodel.fetch(ctx.params);
  },

  /**
   * Count testmodel records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.testmodel.count(ctx.query);
  },

  /**
   * Create a/an testmodel record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.testmodel.add(ctx.request.body);
  },

  /**
   * Update a/an testmodel record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.testmodel.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an testmodel record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.testmodel.remove(ctx.params);
  },

  /**
   * Add relation to a/an testmodel record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.testmodel.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an testmodel record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.testmodel.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an testmodel record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.testmodel.removeRelation(ctx.params, ctx.request.body);
  }
};
