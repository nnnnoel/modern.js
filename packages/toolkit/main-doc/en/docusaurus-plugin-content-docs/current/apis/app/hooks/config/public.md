---
title: public/
sidebar_position: 3
---

Static resource files in any format can be placed in the `public/`, and the files will be Served under the web application domain name.

## Description

The routing of files to be served is based on the convention of the file system. `public/` is the root directory, which corresponds to the root path of the Web application.

For example, the `config/public/sdk/index.js` file will be Served under `${domain}/sdk/index.js` after deployment.

## Scene

For example, `robots.txt`, `auth.xml` and other authentication file.

SDK (requiring the same routing) for other business, or an HTML file for static host.

:::info
For static resources (such as SVG pictures) that need to be referenced by import in the source code, it is recommended to put them in the `src/assets/` for management.
:::

## Compression

If the file is a `.js` file, it will be automatically compressed when the production environment is built.

If the file ends with `.min.js`, it will not compression.