var convict = require('convict');

// -----------------------------------------------------------------------------------------------------

var config = convict({
  url: {
    doc: 'The public web url.',
    format: String,
    default: 'http://localhost'
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: String,
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: Number,
    default: 3000,
    env: 'PORT',
    arg: 'port'
  },
  https: {
    doc: 'Toggle for https support.',
    format: Boolean,
    default: false,
    env: 'HTTPS',
    arg: 'https'
  },
  uploads: {
    dest: 'public/uploads',
    limits: {
      fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
    }
  },
  productEnable: {
    doc: 'Enable product',
    format: Boolean,
    default: false
  },
  priceEnable: {
    doc: 'Enable price',
    format: Boolean,
    default: true
  },
  reserveEnable: {
    doc: 'Enable reserve',
    format: Boolean,
    default: true
  },
  eventEnable: {
    doc: 'Enable event',
    format: Boolean,
    default: true
  },
  bonEnable: {
    doc: 'Enable bon',
    format: Boolean,
    default: true
  },
  contactEnable: {
    doc: 'Enable contact',
    format: Boolean,
    default: true
  },
  contactEmail: {
    doc: 'Email contact',
    format: String,
    default: ''
  },
  mailer: {
    enable: {
      doc: 'Enable the mail-service',
      format: Boolean,
      default: true
    },
    host: {
      doc: 'The mail-service host.',
      format: String,
      default: ''
    },
    port: {
      doc: 'The mail-service port to bind.',
      format: Number,
      default: 587
    },
    user: {
      doc: 'Email.',
      format: String,
      default: ''
    },
    pass: {
      doc: 'Email password.',
      format: String,
      default: ''
    },
  },
  sms: {
    enable: {
      doc: 'Enable sms-service',
      format: Boolean,
      default: false
    },
    account: {
      doc: 'The sms-service account name.',
      format: String,
      default: ''
    },
    endPoint: {
      doc: 'The sms-service end-point.',
      format: String,
      default: ''
    },
    key: {
      doc: 'The sms-service app-key.',
      format: String,
      default: ''
    },
    secret: {
      doc: 'The sms-service secret-key',
      format: String,
      default: ''
    },
    consumer: {
      doc: 'The sms-service consumer-key',
      format: String,
      default: ''
    }
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: String,
      default: ''
    },
    name: {
      doc: 'Database name',
      format: String,
      default: ''
    },
    debug: {
      doc: 'Database debug enable',
      format: Boolean,
      default: false
    }
  }
});

// Perform validation
config.validate({ allowed: 'strict' });
module.exports = config;
