# Automizy-Skeleton-Project ($ASP)

The **Automizy-Skeleton-Project** is the best module of the world. You can use it for everything!

![screenshot 1](https://raw.github.com/automizy/automizy-skeleton-project/master/screenshot1.png)

### Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Options](#Options)
4. [Example](#Example)


<a name="Installation"></a>
## Installation

Download or fork **Automizy-Skeleton-Project** at [GitHub](https://github.com/Automizy/Automizy-Skeleton-Project).

```
git clone https://github.com/Automizy/Automizy-Skeleton-Project
```

or install with Bower:

```
bower install Automizy-Skeleton-Project
```

<a name="Usage"></a>
## Usage

First, load [jQuery](http://jquery.com) (v2.2.4 or greater), [Automizy-Project-Initializer](https://github.com/Automizy/Automizy-Project-Initializer), and the plugin:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
<script src="vendor/automizy-project-initializer/automizy-project-initializer.js" type="text/javascript"></script>
<script src="vendor/automizy-skeleton-project/automizy-skeleton-project.min.js" type="text/javascript"></script>
<link href="vendor/automizy-skeleton-project/automizy-skeleton-project.min.css" rel="stylesheet" type="text/css">
```

Now, init the module and create a new sidebar:

```html
<script type="text/javascript">
    $ASP.init().ready(function(){
        //do something
    });
</script>
```

<a name="Options"></a>
## Options

### New Module

#### Init parameters

```javascript
//code
```

#### Dynamic functions

```javascript
//code
```


## Example

```javascript
$ASP.init().ready(function () {
    //code
})
```



<a name="License"></a>
## License

Copyright (c) 2017 [Automizy](https://automizy.com).

**Automizy-Skeleton-Project** is released under the [MIT license](http://github.com/automizy/automizy-skeleton-project/raw/master/LICENSE.md).
