# Crystal React Bootstrap Dashboard

![Crystal Dashboard](https://user-images.githubusercontent.com/1154740/31934597-c2b055dc-b8d6-11e7-869d-48e6f8992718.png)

Crystal React Bootstrap Dashboard is a beautiful, multi-purpose admin dashboard which is with React, Redux & Bootstrap. It contains a lot of simple and easy to use React components. You can use this dashboard to build many kind of dashboard include health, employees, company dashboard.

**[Live preview](https://jslancerteam.github.io/crystal-dashboard/#/)**

This project is based on [light-bootstrap-dashboard](https://github.com/creativetimofficial/light-bootstrap-dashboard)

## Get started
*Development*
```
git clone https://github.com/jslancerteam/crystal-dashboard
npm install
npm start
```

*Build*
```
npm run build
```

## File structure
```
./src/
├── assets
│   ├── images
│   │   ├── checkbox-1.svg
│   │   ├── checkbox-2.svg
│   │   ├── checkbox-check.svg
│   │   ├── checkbox-uncheck.svg
│   │   ├── default-avatar.png
│   │   ├── faces
│   │   │   ├── face-0.jpg
│   │   │   ├── face-1.jpg
│   │   │   ├── face-2.jpg
│   │   │   ├── face-3.jpg
│   │   │   ├── face-4.jpg
│   │   │   ├── face-5.jpg
│   │   │   ├── face-6.jpg
│   │   │   ├── face-7.jpg
│   │   │   └── tim_vector.jpe
│   │   ├── favicon.ico
│   │   ├── loading-bubbles.svg
│   │   ├── mask.png
│   │   ├── new_logo.png
│   │   ├── radio-1.svg
│   │   ├── radio-2.svg
│   │   ├── sidebar-1.jpg
│   │   ├── sidebar-2.jpg
│   │   ├── sidebar-3.jpg
│   │   ├── sidebar-4.jpg
│   │   ├── sidebar-5.jpg
│   │   └── tim_80x80.png
│   └── styles
│       ├── base  
│       ├── base.scss
│       ├── icons.scss
│       └── react-dates
├── components
│   ├── FormInputs
│   │   ├── Checkbox.js
│   │   ├── Radio.js
│   │   ├── TextInput.js
│   │   ├── index.js
│   │   └── renderField.js
│   ├── MobileMenu.js
│   ├── MyBigCalendar
│   │   ├── Toolbar.js
│   │   └── index.js
│   ├── SideBar
│   │   ├── Nav.js
│   │   ├── UserInfo.js
│   │   └── index.js
│   ├── Switch.js
│   ├── Tags.js
│   └── ThemeOptions.js
├── config
│   └── configureStore.js
├── index.js
├── pages
│   ├── Calendar
│   │   └── index.js
│   ├── Charts
│   │   ├── Nasdaq.js
│   │   ├── PerformanceChart.js
│   │   ├── PublicPreference.js
│   │   ├── UserBehavior.js
│   │   └── index.js
│   ├── Components
│   │   ├── Buttons
│   │   │   ├── ButtonGroups.js
│   │   │   ├── ButtonSizes.js
│   │   │   ├── ButtonStyles.js
│   │   │   ├── ButtonsWithLabel.js
│   │   │   ├── Colors.js
│   │   │   ├── Pagination.js
│   │   │   ├── SocialButtons.js
│   │   │   └── index.js
│   │   ├── Grid
│   │   │   ├── GridCollection.js
│   │   │   ├── Paragraph.js
│   │   │   └── index.js
│   │   ├── Icons.js
│   │   ├── Notifications.js
│   │   ├── Panels
│   │   │   ├── AccordionGroup.js
│   │   │   ├── PageSubcategories.js
│   │   │   ├── TabGroup.js
│   │   │   └── index.js
│   │   ├── SweetAlert.js
│   │   ├── Typography.js
│   │   └── index.js
│   ├── Dashboard
│   │   ├── EmailChart.js
│   │   ├── SalesChart.js
│   │   ├── Tasks.js
│   │   ├── UserBehaviorChart.js
│   │   └── index.js
│   ├── Forms
│   │   ├── ExtendedForms
│   │   │   ├── DatePicker.js
│   │   │   ├── Switches.js
│   │   │   ├── TagSection.js
│   │   │   └── index.js
│   │   ├── RegularForms
│   │   │   ├── FormElements.js
│   │   │   ├── HorizontalForm.js
│   │   │   ├── StackedForm.js
│   │   │   └── index.js
│   │   ├── ValidationForms
│   │   │   └── index.js
│   │   └── index.js
│   ├── Icons
│   │   └── index.js
│   ├── Main
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── index.js
│   ├── MapsPage
│   │   ├── GoogleMap.js
│   │   ├── Map.js
│   │   ├── VectorMap.js
│   │   └── index.js
│   ├── Tables
│   │   ├── ExtendedTables
│   │   │   ├── BigTable.js
│   │   │   ├── TableWithLinks.js
│   │   │   ├── TableWithSwitch.js
│   │   │   └── index.js
│   │   ├── ReactBootstrapTable
│   │   │   └── index.js
│   │   ├── RegularTables
│   │   │   ├── PlainBackgroundTable.js
│   │   │   ├── StripedTable.js
│   │   │   └── index.js
│   │   ├── generateData.js
│   │   └── index.js
│   └── UserProfile
│       ├── ProfileForm.js
│       ├── UserInfo.js
│       └── index.js
├── reducers
│   ├── Auth.js
│   ├── Layout.js
│   ├── ThemeOptions.js
│   └── index.js
└── registerServiceWorker.js
```
## Author
David Tran [@davidtranwd](https://twitter.com/davidtranwd)

## License

Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)