FROM composer:2.5 AS composer-build

FROM php:8.2-fpm-bullseye

COPY --from=composer-build /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

EXPOSE 8000

ENTRYPOINT ["./starter.sh"]
