# [Simple Tab](https://simpletab.azurewebsites.net)

A web site which shows the current local time. This is hosted by azure webapps.
Append `?blank` to the url to use black background instead.

## Create or Update

Web app was created using the following command.

```cmd
az webapp up --sku F1 --name simpletab --os-type windows
```

Webapp can be updated using the following command.

```cmd
az webapp up --os-type windows
```