'use strict';

var squarecore = module.exports;

// module information
squarecore.version = 'v' + require('./package.json').version;
squarecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of squarecore-lib found. ' + 
      'Please make sure that you are not mixing instances of classes of the different versions of squarecore.';
    console.warn(message);
  }
};
squarecore.versionGuard(global._squarecore);
global._squarecore = squarecore.version;

// crypto
squarecore.crypto = {};
squarecore.crypto.BN = require('./lib/crypto/bn');
squarecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
squarecore.crypto.Hash = require('./lib/crypto/hash');
squarecore.crypto.Random = require('./lib/crypto/random');
squarecore.crypto.Point = require('./lib/crypto/point');
squarecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
squarecore.encoding = {};
squarecore.encoding.Base58 = require('./lib/encoding/base58');
squarecore.encoding.Base58Check = require('./lib/encoding/base58check');
squarecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
squarecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
squarecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
squarecore.util = {};
squarecore.util.buffer = require('./lib/util/buffer');
squarecore.util.js = require('./lib/util/js');
squarecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
squarecore.errors = require('./lib/errors');

// main bitcoin library
squarecore.Address = require('./lib/address');
squarecore.Block = require('./lib/block');
squarecore.MerkleBlock = require('./lib/block/merkleblock');
squarecore.BlockHeader = require('./lib/block/blockheader');
squarecore.HDPrivateKey = require('./lib/hdprivatekey.js');
squarecore.HDPublicKey = require('./lib/hdpublickey.js');
squarecore.Networks = require('./lib/networks');
squarecore.Opcode = require('./lib/opcode');
squarecore.PrivateKey = require('./lib/privatekey');
squarecore.PublicKey = require('./lib/publickey');
squarecore.Script = require('./lib/script');
squarecore.Transaction = require('./lib/transaction');
squarecore.GovObject = require('./lib/govobject');
squarecore.URI = require('./lib/uri');
squarecore.Unit = require('./lib/unit');

// dependencies, subject to change
squarecore.deps = {};
squarecore.deps.bnjs = require('bn.js');
squarecore.deps.bs58 = require('bs58');
squarecore.deps.Buffer = Buffer;
squarecore.deps.elliptic = require('elliptic');
squarecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
squarecore.Transaction.sighash = require('./lib/transaction/sighash');
