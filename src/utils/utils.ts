export function loadLogoByName(technology: string) {
  let iconName = "";
  switch (technology.toLowerCase()) {
    case "react" || "react-native":
      iconName = "react";
      break;
    case "angular":
      iconName = "angular";
      break;
    case "angularjs":
      iconName = "angular";
      break;
    case "bitbucket":
      iconName = "bitbucket";
      break;
    case "cypress":
      iconName = "cypress";
      break;
    case "favro":
      iconName = "favro";
      break;
    case "firebase":
      iconName = "firebase";
      break;
    case "git":
      iconName = "git";
      break;
    case "github":
      iconName = "github";
      break;
    case "ionic":
      iconName = "ionic";
      break;
    case "javascript":
      iconName = "javascript";
      break;
    case "typescript":
      iconName = "typescript";
      break;
    case "aggrid":
      iconName = "lib-ag-grid";
      break;
    case "antdesign":
      iconName = "lib-ant-design";
      break;
    case "bootstrap":
      iconName = "lib-bootstrap";
      break;
    case "dropzone":
      iconName = "libdropzone";
      break;
    case "imageCropPicker":
      iconName = "lib-image-crop-picker";
      break;
    case "reacthookforms":
      iconName = "lib-react-hook-forms";
      break;
    case "reactquery":
      iconName = "lib-react-query";
      break;
    case "mobx":
      iconName = "lib-mobx";
      break;
    case "mongodb":
      iconName = "mongo";
      break;
    case "mysql":
      iconName = "mongo";
      break;
    case "mssql":
      iconName = "mongo";
      break;
    case "oracle":
      iconName = "oracle";
      break;
    case "nextjs":
      iconName = "mongo";
      break;
    case "slack":
      iconName = "tool-slack";
      break;
    case "trello":
      iconName = "tool-trello";
      break;
    case "unity":
      iconName = "unity";
      break;
    case "webpack":
      iconName = "webpack";
      break;
    case ".netcore" || "asp.netmvc" || "entityframework":
      iconName = "aspnetcore";
      break;
    case "asp.netmvc":
      iconName = "aspnetcore";
      break;
    case "entityframework":
      iconName = "aspnetcore";
      break;
    case "nodejs":
      iconName = "nodejs";
      break;
    case "ionic 2":
      iconName = "ionic";
      break;
    case "jira":
      iconName = "jira";
      break;
      case "jquery":
      iconName = "lib-react-query";
      break;
      case "zustand":
      iconName = "lib-react-query";
      break;
      case "vuforia":
      iconName = "lib-react-query";
      break;
      
      case "croppicker":
      iconName = "lib-image-crop-picker";
      break;
      
      case "transistor":
        iconName = "lib-transistor";
        break;
      case "hookforms":
      iconName = "lib-react-hook-forms";
      break;

  }

  const path = "./assets/icons/" + iconName + ".svg";
  return path;
}
