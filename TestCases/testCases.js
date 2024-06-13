const { Selector } = require("testcafe");

fixture('zoutlet Test Cases')
    .page('https://www.zoutletbh.com');

//Test 1 check regist with registerd user 
test('Test Registered User', async t => {
    await t
        .click('#top-bar-content > span > a') //click on login
        .wait(1000)
        .click('#nav > a.wp-login-register')// click on register
        .wait(1000)
        .typeText('#user_login', 'registeredUser')//type available username
        .wait(1000)
        .typeText('#user_email', 'registeredUser@gmail.com')//type available email
        .wait(1000)
        .click('#wp-submit')//click register button
        .wait(1000)
        .expect(Selector('#login_error > ul').exists).ok()//except error massage 
        .expect(Selector('#login-message').exists).notOk()//not except successful massage
});

//Test 2 check regist with unregisterd user 
test('Test Unregistered User', async t => {
    await t
        .click('#top-bar-content > span > a') //click on login
        .wait(1000)
        .click('#nav > a.wp-login-register')// click on register
        .wait(1000)
        .typeText('#user_login', 'newUsername1')//type new username
        .wait(1000)
        .typeText('#user_email', 'newEmail1@gmail.com')//type new email
        .wait(1000)
        .click('#wp-submit')//click register button
        .wait(1000)
        .expect(Selector('#login_error > ul').exists).notOk()//not except error massage 
        .expect(Selector('#login-message').exists).ok()//except successful massage
});

//Test 3 check Sign In with Wrong Password 
test('Test Sign In with Wrong Password', async t => {
    await t
        .click('#top-bar-content > span > a') //click on login
        .wait(1000)
        .typeText('#user_login', 'registeredUser@gmail.com')//type registerd email
        .wait(1000)
        .typeText('#user_pass', 'wrongPassword')//type wrong password
        .wait(1000)
        .click('#wp-submit')//click on login button
        .wait(1000)
        .expect(Selector('#login_error').exists).ok()//expect error massage
        .expect(Selector('#content > article > div > div > div.woocommerce-MyAccount-content > p:nth-child(2) > strong:nth-child(1)').exists).notOk()//not expect to login
});

//Test 4 check Sign In with Wrong Email 
test('Test Sign In with Wrong Email', async t => {
    await t
        .click('#top-bar-content > span > a') //click on login
        .wait(1000)
        .typeText('#user_login', 'wrongEmail@gmail.com')//type Wrong email
        .wait(1000)
        .typeText('#user_pass', 'wrongPassword')//type wrong password
        .wait(1000)
        .click('#wp-submit')//click on login button
        .wait(1000)
        .expect(Selector('#login_error').exists).ok()//expect error massage
        .expect(Selector('#content > article > div > div > div.woocommerce-MyAccount-content > p:nth-child(2) > strong:nth-child(1)').exists).notOk()//not expect to login
});

//Test 5 check Sign In with Wrong Username 
test('Test Sign In with Wrong Username', async t => {
    await t
        .click('#top-bar-content > span > a') //click on login
        .wait(1000)
        .typeText('#user_login', 'wrongUsername')//type Wrong Username
        .wait(1000)
        .typeText('#user_pass', 'wrongPassword')//type wrong password
        .wait(1000)
        .click('#wp-submit')//click on login button
        .wait(1000)
        .expect(Selector('#login_error').exists).ok()//expect error massage
        .expect(Selector('#content > article > div > div > div.woocommerce-MyAccount-content > p:nth-child(2) > strong:nth-child(1)').exists).notOk()//not expect to login
});

//Test 6 check Sign In with Correct Email and Password then Sign out
test('Test Sign In with Correct Email and Password then Sign Out', async t => {
    await t
        .click('#top-bar-content > span > a') //click on login
        .wait(1000)
        .typeText('#user_login', 'correctEmail01@gmail.com')//type registerd email
        .wait(1000)
        .typeText('#user_pass', 'drw40k83i6m)O!g5')//type correct password
        .wait(1000)
        .click('#wp-submit')//click on login button
        .wait(1000)
        .expect(Selector('#login_error').exists).notOk()//not expect error massage
        .expect(Selector('#content > article > div > div > div.woocommerce-MyAccount-content > p:nth-child(2) > strong:nth-child(1)').exists).ok()//expect to login and show my account page
        .click('#top-bar-content > span > a')//click logout
        .wait(1000)
});

//Test 7 check Sign In with Correct Username and Password then Sign out
test('Test Sign In with Correct Username and Password then Sign Out', async t => {
    await t
        .click('#top-bar-content > span > a') //click on login
        .wait(1000)
        .typeText('#user_login', 'correctUsername')//type registerd Username
        .wait(1000)
        .typeText('#user_pass', 'drw40k83i6m)O!g5')//type correct password
        .wait(1000)
        .click('#wp-submit')//click on login button
        .wait(1000)
        .expect(Selector('#login_error').exists).notOk()//expect error massage
        .expect(Selector('#content > article > div > div > div.woocommerce-MyAccount-content > p:nth-child(2) > strong:nth-child(1)').exists).ok()//expect to login and show my account page
        .click('#top-bar-content > span > a')//click logout
        .wait(1000)
});
