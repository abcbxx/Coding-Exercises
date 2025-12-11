const config = {
  appName: 'Reporting Tool',
  version: '1.2.0',
  database: {
    host: 'localhost',
    port: 5432,
    user: 'admin',
  },
  logging: {
    enabled: true,
    level: 'info',
  },
};

const updateDatabasePort = (originalConfig, newPort) => {
  // Use spread syntax to create a shallow copy of the top level
  return {
    ...originalConfig,
    // Use spread syntax to create a shallow copy of the nested object
    database: {
      ...originalConfig.database,
      port: newPort, // Only change the port property in the copy
    },
  };
};

const newConfig = updateDatabasePort(config, 3306);

// Expected Checks:
console.log(newConfig.database.port); // 3306
console.log(config.database.port);    // 5432 (Original must be unchanged)