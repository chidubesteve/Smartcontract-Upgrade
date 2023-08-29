const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = await deployments
    const {deployer} = await getNamedAccounts()

    log("#################################")

    const Box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "BoxProxyAdmin",
                artifact: "BoxProxyAdmin"
            },
        },
    })

    if(!developmentChains.includes(network.name)  && process.env.ETHERSCAN_API_KEY)  {
        log("Verifying...")
        await verify(Box.address, [])
        log("Verified!")
    }
}