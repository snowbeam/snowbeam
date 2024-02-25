const { npm_config_user_agent: UA } = process.env;
const [packageManager] = (UA ?? "").split(" ");
const [name, version] = packageManager.split("/");
if (name !== "yarn") {
  const suggestion = "\x1b[1;92myarn\x1b[0;31m";
  console.error("\x1b[0;31m");
  console.error("╭───────────────────────────────────────────╮");
  console.error(`│\tPlease use ${suggestion} instead of ${name} \t    │`);
  console.error("╰───────────────────────────────────────────╯");
  console.error("\x1b[0m");
  process.exit(1);
}
