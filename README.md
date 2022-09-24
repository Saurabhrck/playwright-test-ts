# Playwright ![pw](https://user-images.githubusercontent.com/70570645/169813479-9713557e-4430-42ea-91f4-70c6cb72ec0b.PNG)

Select the button below to try this demo in [Gitpod](https://www.gitpod.io/)

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/Saurabhrck/playwright-test-ts)

## Pre-requisites

1. Clone the playwright-test-ts repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Playwright tests, you will need to set your LambdaTest username and access key in the environment variables/.env file. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img height="300" src="https://user-images.githubusercontent.com/70570645/169819599-127dd293-347d-45b6-9651-e46f2b038583.png"/>

**Lambda.env**

```js
LT_USERNAME = "YOUR_LAMBDATEST_USERNAME";
LT_ACCESS_KEY = "YOUR_LAMBDATEST_ACCESS_KEY";
```

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Playwright Test

> **Test Scenario**: The test will launch 2 chrome instances in parallel in Winwdows 10. It will launch Bing.com. Test will search with 2 terms and validate the title of the page

Shown below are the steps on running Playwright tests on the LambdaTest platform.

1. Clone the playwright-test-ts GitHub repository and switch to the cloned directory.

```js
git clone https://github.com/Saurabhrck/playwright-test-ts.git
cd playwright-test-ts
```

2. Ensure you have npm dependencies installed.

3. Configure your LambdaTest authentication credentials.

Once you are done with the above-mentioned steps, you can initiate your first Playwright test on LambdaTest.

4. Pass the below command to run the test.

```
npm run test
```

## View your Playwright test results

The LambdaTest Automation Dashboard is where you can see the results of your Playwright tests after running them on the LambdaTest platform.

The below screenshot of LambdaTest Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169819291-57072893-32a4-48bc-b7a3-6c442911eb31.png"/>

On clicking the session name of the respective test, you can view the details of Playwright test session that you just executed. For example, the below screenshot shows a test execution details of Playwright test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video.

<img height="400" src="https://user-images.githubusercontent.com/70570645/169819492-9b89a3ec-3db3-44f7-8ced-11eb747b9f2c.png"/>

## Run Playwright Tests In Gitpod

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/Saurabhrck/playwright-test-ts)

- After the Gitpod session launches, navigate to the terminal and run the following commands to save your [LambdaTest Credentials](https://accounts.lambdatest.com/detail/profile) to Gitpod as environment variables:

```
eval $(gp env -e LT_USERNAME=******)
eval $(gp env -e LT_ACCESS_KEY=******)
```

- Click the following link if you're unsure how to [access your LambdaTest credentials.](https://www.lambdatest.com/support/docs/using-environment-variables-for-authentication-credentials/?utm_source=github&utm_medium=repo&utm_campaign=playwright-sample). Also, if you start a new terminal in Gitpod, you have to run the following command to reset envrionment variables:

```
 eval $(gp env -e)
```

For more information, refer to [Gitpod documentation](https://www.gitpod.io/docs/47_environment_variables/)
