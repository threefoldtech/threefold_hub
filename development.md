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
- frontend/

    A custom Vue 3 web application to interact with threefold hub
- config.yml

    A configuration file for customizing a chain in development.
