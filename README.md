# Subscription app

## Tools

- This application is build using react native expo framework
- This applicaiton uses Spring boot (backend) framework that is deployed on onRender server.
- Spring boot uses postgress database that is deployed on AWS server.

## About the app

This is a simple web application that allows users to register and subscribe to a class.
The sport club offers combat sport lessons: Brazilian Jiu-Jitsu, Grappling, and MMA.
User is able to buy of a given subscription types above or to choose to buy all-in package.

App launches on a login page. User must login to be able to access the content. If user doesn't an
account yet, user must register first.

Once logged the application wil give you access based on your role (user or admin).

## Users credentials for testing

#### Admin

- username: admin, password: admin

#### Users

- username: justas, password: justas
- username: demo, password: 12345
- or create your own user

## Screens and acessibility

#### User has access:

- Profile screen
  - User change theme (light or dark)
  - User can change username
  - User cange email adress
  - User can change password
- Add subscription screen
  - User can buy a subscription with selected type and duration
- Subscribtion history screen
  - User can view subscribtion history
  - User details and status of the subscribtion
  - User can cancel delete PENDING subscribtion
- Home Screen
  - Information about club and training sessions

#### Admin has access:

- Profile screen
  - User change theme (light or dark)
  - User can change username
  - User cange email adress
  - User can change password
- Registered users screen
  - Admin can view registered users
  - Admin can seach user by username
  - Admin can click on a user to navigate to:
    - View all subscribtions of a user
    - Can delete Pending subscribtion
    - Can change status of a Pending subscibtion
- Subscribtions screen
  - Admin can sort subscribtions by Pending, Active, Expired
  - Admin can delete Pending subsription
  - Admin can activate Peding subscribtion
- Home screen
  - Information about club and training sessions

# Documentation

### Inspiration for login & register pages design:

- www.instagram.com
- https://www.youtube.com/watch?v=kghwFYOJiNg&t=59s

### Navigation documentation:

- https://reactnavigation.org/docs/tab-based-navigation/ (tab navigation)
- https://reactnative.dev/docs/navigation (screen navigation)

### ChatGPT

- Asked about Tab.Navigator en Tab.Screen styling options (focused, background color, header shown and...)
- Asked to generate email regex "const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
- Asked about refreshing the mounted data while navigating through tabs. - Given solution:
  useFocusEffect(
  useCallback(() => {
  if (userId) {
  fetchData();
  }
  }, [userId])
  );

- Asked how to style arrow navigate back button: "headerTintColor: color"

- Asked about selection list property, and the solution was to combine Pressable with boelean value clicked
  and then displaying FlatList
- If the app was crashing asked for help aboud understanding the given error
