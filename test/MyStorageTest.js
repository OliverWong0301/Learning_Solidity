const {assert} = require("console");
const Storage = artifacts.require("Storage");

contract("Storage", () => {

    let storage = null;

    before(async () => {

        storage = await Storage.deployed();

    });

    it("Should store a number", async () => {

        await storage.store(57); // Test by hard code fill in a fixed number
        const _num = await storage.retrieve();

        console.log("Show number: ", _num.toString())
        assert(_num.toString === "57")

    });

    it("Should store a message", async () => {

        const _myMessage = await storage.myMsg();

        console.log("Show the internal message: ", _myMessage);
        assert(_myMessage === "By times 1e18");

    });

    it("Should store an address", async () => {

        const _myAddress = await storage.myAccount();

        console.log("Show the sender address: ", _myAddress);
        assert(_myAddress !== null);

    })

})