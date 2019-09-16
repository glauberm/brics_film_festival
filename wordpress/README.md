# 4th BRICS Film Festival's WordPress plugin

This is the WordPress plugin of the 4th BRICS Film Festival.

## Running it locally

### Install WordPress

First make `wp` your current directory, which is ignored by Git and where you should install WordPress.

```[sh]
cd wp
```

Then [`install wp-cli`](https://wp-cli.org/#installing). With it installed, you should:

#### Download WordPress core

```[sh]
wp core download
```

#### Create a new `wp-config.php`

```[sh]
wp config create --dbname=<YOUR_DB_NAME> --dbuser=<YOUR_DB_USER> --dbpass=<YOUR_DB_PASS>
```

#### Set the WP_DEBUG constant to true

```[sh]
wp config set WP_DEBUG true --raw --type=constant
```

#### Install WordPress core

```[sh]
wp core install --title='4th BRICS Film Festival' --url=localhost:8080 --admin_user=<YOUR_ADMIN_USER> --admin_password=<YOUR_ADMIN_PASSWORD> --admin_email=<YOUR_ADMIN_EMAIL>
```

### Symlink the plugin to the plugins directory

```[sh]
ln -sr ../brics-film-festival wp-content/plugins/
```

### Define the environment parameters

Copy the `env.php.example` file to a `env.php` one:

```[sh]
cp ../brics-film-festival/env.php.example ../brics-film-festival/env.php
```

Then, edit the following parameters:

```[php]
define( 'ENV', 'development' );
define( 'BASE_SITE_URL', 'http://localhost:8080' );
```

We'll let `RECAPTCHA_SECRET_KEY` blank for now.

### Activate the plugin

```[sh]
wp plugin activate brics-film-festival
```

### Install additional plugins

You should also install and activate the `advanced-custom-fields` and `acf-to-rest-api` plugins.

```[sh]
wp plugin install advanced-custom-fields --activate && wp plugin install acf-to-rest-api --activate
```

### Launch the development server

```[sh]
wp server
```

Then, finally, access the `wp-admin` at [localhost:8080/wp-admin](http://localhost:8080/wp-admin).

## Using [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)

Just install the dependencies:

```[sh]
composer install
```

If you're using [VSCode](https://code.visualstudio.com/) things are already configured for you, you just have to install the [`ikappas.phpcs`](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs) extension.

[PHPCompatibilityWP](https://github.com/PHPCompatibility/PHPCompatibilityWP) is also enabled by default, but you can disable it by removing its rule from `phpcs.xml` if you don't need it.
