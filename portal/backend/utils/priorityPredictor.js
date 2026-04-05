const getPriority = (text) => {
  if (!text) return "Low";

  text = text.toLowerCase();

  // 🔥 High Priority Keywords
  if (
    text.includes("urgent") ||
    text.includes("immediately") ||
    text.includes("fire") ||
    text.includes("danger") ||
    text.includes("accident")
  ) {
    return "High";
  }

  // ⚡ Medium Priority Keywords
  if (
    text.includes("soon") ||
    text.includes("issue") ||
    text.includes("problem") ||
    text.includes("not working")
  ) {
    return "Medium";
  }

  // ✅ Default
  return "Low";
};

module.exports = getPriority;