function appendStyles(rules) {
    const style = document.createElement("style");
    document.head.append(style);
    const { sheet } = style;
    if (!sheet) return;
    rules.forEach((rule) => sheet.insertRule(rule));
}