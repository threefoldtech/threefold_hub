package main

import (
	"log"
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/threefoldtech/threefold_hub/app"
)

func main() {
	rootCmd, _ := NewRootCmd(
		app.Name,
		app.AccountAddressPrefix,
		app.DefaultNodeHome,
		app.Name,
		app.ModuleBasics,
		app.New,
		// this line is used by starport scaffolding # root/arguments
	)
	if err := extendGravitySubcommands(rootCmd); err != nil {
		log.Printf("Error: couldn't extend gravity subcommands: %s", err.Error())
		os.Exit(1)
	}
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
