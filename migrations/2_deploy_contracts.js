const UsernameToken = artifacts.require('UsernameToken');

module.exports = function(deployer) {
    deployer.deploy(UsernameToken);
};
