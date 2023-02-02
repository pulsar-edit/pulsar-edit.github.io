## Common Issues

### Pulsar does not launch "_GPU process isn't usable. Goodbye_"

You may need to launch the application with the argument `--no-sandbox` to get
around this issue. This is something [under investigation](https://github.com/pulsar-edit/pulsar/issues/174).
