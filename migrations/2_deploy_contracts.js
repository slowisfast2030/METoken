var METoken = artifacts.require("METoken");
var METFaucet = artifacts.require("METFaucet");

module.exports = function(deployer, network, accounts) {
    // 这个accounts是在truffle环境下的固有变量
    // METoken和METFaucet也是固有变量

	var owner = accounts[0];
	// Deploy the METoken contract first
	deployer.deploy(METoken, {from: owner}).then(function() {
		// Then deploy METFaucet and pass the address of METoken and the
		// address of the owner of all the MET who will approve METFaucet
		return deployer.deploy(METFaucet, METoken.address, owner);
  	});
    // deployer.deploy这个函数原来可以传入好几个参数
}