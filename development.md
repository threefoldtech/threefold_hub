# Threefold hub development

## repository structure

- app/

    Files that wire together the blockchain. The most important file is app.go that contains type definition of the blockchain and functions to create and initialize it.
- cmd/

    The main package responsible for the CLI of compiled binary.
- docs/

    Documentation
- testutil/

    Helper functions for testing.
- vue/

    A starport generated Vue 3 web app template
- config.yml

    A configuration file for customizing a chain in development.
