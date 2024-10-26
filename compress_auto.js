const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

const output = fs.createWriteStream(__dirname + "/dist/ps_hu_formal_language.ocmod.zip");

const archive = archiver("zip", {
  zlib: { level: 4 },
});

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log("ps_hu_formal_language.ocmod.zip has been created");
});

archive.on("warning", function (err) {
  if (err.code === "ENOENT") {
    console.warn("Warning:", err);
  } else {
    throw err;
  }
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);

archive.directory("src/admin/", "admin");
archive.directory("src/extension/opencart/admin/language/hu-hu/captcha", "admin/language/hu-hu/extension/opencart/captcha");
archive.directory("src/extension/opencart/admin/language/hu-hu/currency", "admin/language/hu-hu/extension/opencart/currency");
archive.directory("src/extension/opencart/admin/language/hu-hu/dashboard", "admin/language/hu-hu/extension/opencart/dashboard");
archive.directory("src/extension/opencart/admin/language/hu-hu/fraud", "admin/language/hu-hu/extension/opencart/fraud");
archive.directory("src/extension/opencart/admin/language/hu-hu/module", "admin/language/hu-hu/extension/opencart/module");
archive.directory("src/extension/opencart/admin/language/hu-hu/payment", "admin/language/hu-hu/extension/opencart/payment");
archive.directory("src/extension/opencart/admin/language/hu-hu/report", "admin/language/hu-hu/extension/opencart/report");
archive.directory("src/extension/opencart/admin/language/hu-hu/shipping", "admin/language/hu-hu/extension/opencart/shipping");
archive.directory("src/extension/opencart/admin/language/hu-hu/theme", "admin/language/hu-hu/extension/opencart/theme");
archive.directory("src/extension/opencart/admin/language/hu-hu/total", "admin/language/hu-hu/extension/opencart/total");

archive.directory("src/catalog/", "catalog");
archive.directory("src/extension/opencart/catalog/language/hu-hu/captcha", "catalog/language/hu-hu/extension/opencart/captcha");
archive.directory("src/extension/opencart/catalog/language/hu-hu/module", "catalog/language/hu-hu/extension/opencart/module");
archive.directory("src/extension/opencart/catalog/language/hu-hu/payment", "catalog/language/hu-hu/extension/opencart/payment");
archive.directory("src/extension/opencart/catalog/language/hu-hu/shipping", "catalog/language/hu-hu/extension/opencart/shipping");
archive.directory("src/extension/opencart/catalog/language/hu-hu/total", "catalog/language/hu-hu/extension/opencart/total");

archive.file("src/install.json", { name: "install.json" });

archive.finalize();
