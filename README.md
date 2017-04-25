# Breadcrumbs

### Usage

Breadcrumbs will recursively go through the path to setup your breadcrumbs for you.
The first thing you will need to do is import the breadcrumb container AND you must wrap the base route around it.

```
<Route path="/" component={BreadcrumbContainer} />
```

Additionally if you would like to have different names for your breadcrumbs other than the url path you can pass a mapping object.
```
const breadcrumbMap = {
  "/": "Home",
  "/path/subpath": "Breadcrumb Name"
}
<Route path="/" component={(props) => <BreadcrumbContainer {...props} breadcrumbMap={breadcrumbMap}/>} />
```