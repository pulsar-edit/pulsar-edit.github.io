## Common Issues

### macOS error "_App is damaged and can’t be opened_"

Current binaries are not signed so will produce an error "**_App is damaged and
can’t be opened_**". This can be fixed by running
`xattr -cr /Applications/Pulsar.app/` in the terminal.  
See [here](https://appletoolbox.com/app-is-damaged-cannot-be-opened-mac/) for
more information.
