module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` and `net` modules
      // soling "ModuleNotFoundError: Module not found: Error: Can't resolve 'net' or 'fs'"
      if (!isServer) {
        config.node = {
          net: 'empty',
          fs: 'empty'
        }
      }
  
      return config
    }
  }