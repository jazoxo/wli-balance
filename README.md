# wli-balance
 With this you can check your balance in the wanliuno network or the ethereum network
 
 - Just change the account address in 'app.js' and put you own address, then after that run the below code
   ```shell
     npm install
	 ```
- Open the ```.env``` file and put the address in USER_ADDRESS ="put any address here"  and save it.

- Then run the below command to see your account balance
	 
	 ```shell
	 npm run nunu
	 ```
# To Send Wanliuno

You can also send wanliuno also with this code

Also open ```.env``` and complete all

```shell

USER_ADDRESS="Enter the your own address"
YOUR_PRIVATE_KEY_1="Enter your private key for your address here"
RECEIVER_ADDRESS="Enter the address of the person you are sending the wanliuno to"
AMOUNT=10
```

After inputs of the above then run the code with

```shell
npm run send

```