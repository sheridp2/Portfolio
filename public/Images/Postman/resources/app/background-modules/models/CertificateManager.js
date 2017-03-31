var _ = require('lodash'),
    fs = require('fs');

// @todo remove after moving to CertificateList
class Certificate {
  constructor(options) {
    this.host = options.host || '';
    this.pemPath = options.pemPath || '';
    this.keyPath = options.keyPath || '';
    this.passphrase = options.passphrase || '';
    this._pemData = null;
    this._keyData = null;
  }

  resolve(cb) {
    if (this._pemData && this._keyData) {
      _.isFunction(cb) && cb();
      return;
    }

    fs.readFile(this.pemPath, (err, _pemData) => {
      fs.readFile(this.keyPath, (err, _keyData) => {
        this._pemData = _pemData;
        this._keyData = _keyData;

        _.isFunction(cb) && cb();
      });
    });
  }

  toJSON() {
    return {
      host: this.host,
      pemPath: this.pemPath,
      keyPath: this.keyPath,
      passphrase: this.passphrase
    }
  }
}

class CertificateManager {
  constructor(certificatesJSON) {
    this.certificates = _.map(certificatesJSON, function(certificateJSON) {
      return new Certificate(certificateJSON);
    });
  }

  findCertificateByDomain(host) {
    return _.find(this.certificates, (certificateModel) => {
      return host === certificateModel.host;
    });
  }

  getCertificateContents(host, cb) {
    let certificate = this.findCertificateByDomain(host);

    if (!certificate) {
      cb(new Error('No Certificate found for host:' + host));
      return;
    }

    certificate.resolve((err) => {
      if (err) {
        _.isFunction(cb) && cb(err);
        return;
      }

      _.isFunction(cb) && cb(null, {
        host: host,
        pem: certificate._pemData,
        key: certificate._keyData,
        passphrase: certificate.passphrase,
        pemPath: certificate.pemPath,
        keyPath: certificate.keyPath
      });
    })
  }
}
module.exports = CertificateManager;
