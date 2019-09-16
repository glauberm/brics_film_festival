# 4th BRICS Film Festival's Wordpress theme

This is the Wordpress theme of the 4th BRICS Film Festival. It's an admin theme, in the sense that it only serve views and deal with templates in the context of `wp-admin`, but its main goal is to register REST API endpoints and custom post types, send emails, handle form submissions and other back-end stuff.

## Running it locally

### Install Wordpress

First, make a directory called `wp`, which is ignored by Git, and enter it.

```[sh]
mkdir wp && cd wp
```

Then, [`install wp-cli`](https://wp-cli.org/#installing). With it installed, you should:

#### Download Wordpress core

```[sh]
wp core download
```

#### Create a new `wp-config.php`

```[sh]
wp config create --dbname=<YOUR_DB_NAME> --dbuser=<YOUR_DB_USER> --dbpass=<YOUR_DB_PASS>
```

#### Set the WP_DEBUG constant to true

```[sh]
wp config set WP_DEBUG true --raw
```

#### Install Wordpress core

```[sh]
wp core install --url=localhost:8080 --title=<YOUR_SITE_TITLE> --admin_user=<YOUR_ADMIN_USER> --admin_password=<YOUR_ADMIN_PASSWORD> --admin_email=<YOUR_ADMIN_EMAIL>
```

### Symlink the theme to a directory for the theme inside of the Wordpress installation

```[sh]
ln -sr ../theme wp-content/themes/<YOUR_THEME_NAME>
```

### Activate the theme

```[sh]
wp theme activate <YOUR_THEME_NAME>
```

### Define the environment parameters

Copy the `env.example.php` file to a `env.php` one:

```[sh]
cp ../theme/env.example.php ../theme/env.php
```

Then, edit the following parameters:

```[php]
define( 'ENV', 'development' );
define( 'BASE_SITE_URL', 'http://localhost:8080' );
```

We'll let `RECAPTCHA_SECRET_KEY` blank for now.

### Launch the development server

```[sh]
wp server
```

Then, finally, access the `wp-admin` at [localhost:8080/wp-admin](http://localhost:8080/wp-admin).

## Using [Wordpress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)

Just install the dependencies:

```[sh]
composer install
```

If you're using [VSCode](https://code.visualstudio.com/) things are already configured for you, you just have to install the [`ikappas.phpcs`](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs) extension.
