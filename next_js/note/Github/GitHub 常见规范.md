## GitHub 常见规范

   良好的 commit 信息有助于了解每次代码更改的目的。通常使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，例如：

   - **格式**：
     ```
     <type>(<scope>): <subject>
     ```

   - **常见类型**：
     - `feat`: 新功能
     - `fix`: 修复 bug
     - `docs`: 修改文档
     - `style`: 代码格式修改（空格、缩进等）
     - `refactor`: 代码重构（不影响功能）
     - `test`: 添加或修改测试
     - `chore`: 构建过程或辅助工具的变动

   **示例**：
   ```bash
   feat(auth): add login feature
   fix(api): handle missing token in request header
   ```

### 2. **Pull Request (PR) 规范**
   - **PR 名称**应简明扼要描述更改内容，例如：
     - `Add login feature`
     - `Fix bug with user authentication`
   
   - **PR 描述**应包括：
     - **背景**信息：为什么需要这个更改？
     - **更改内容**：详细描述具体改动。
     - **关联问题**：使用 `Closes #issue_number` 关联 Issue。

   - **标签**：为 PR 设置相应标签，表明 PR 类型、优先级、审核状态等。

### 3. **分支管理规范**
   分支管理通常采用 **Git Flow** 或 **GitHub Flow** 规范：

   - **Git Flow**:
     - `main` 或 `master`：生产环境的代码，保持稳定。
     - `develop`：开发中的代码，包含即将发布的功能。
     - `feature/branch-name`：用于开发新功能的分支。
     - `hotfix/branch-name`：紧急修复的分支。

   - **GitHub Flow**（较为简洁）：
     - `main`：主分支，包含稳定代码。
     - **feature branches**：为每个新功能或修复创建分支。

### 4. **Issue 规范**
   - **清晰的问题描述**：描述清楚问题的原因、重现步骤、期望的行为。
   - **标签**：使用标签标记 Issue 的类型（`bug`, `enhancement`）和优先级。
   - **指派和项目板**：将 Issue 指派给特定开发人员，并分配到项目中进行跟踪。

### 5. **代码审查 (Code Review) 规范**
   - **保持简洁**：每个 PR 尽量只包含一项功能或修复。
   - **审核重点**：关注代码逻辑、可维护性、潜在的 bug 和性能问题。
   - **提供具体反馈**：在进行代码审查时，提供建设性的反馈，并提出改进建议。

### 6. **README 文件规范**
   一个清晰的 `README.md` 文件帮助新用户快速了解项目并开始使用。常见的内容包括：
   - **项目简介**：简要描述项目的目的和功能。
   - **安装步骤**：如何安装和运行项目。
   - **使用示例**：如何使用项目的基本功能。
   - **贡献指南**：如何贡献代码、提交 Issue 或 PR。
   - **许可证信息**：列出项目的开源许可证。

### 7. **代码风格规范**
   - 使用代码格式化工具，例如 [Prettier](https://prettier.io/) 和 [ESLint](https://eslint.org/)，确保统一的代码风格。
   - 配置 `.editorconfig` 文件来控制缩进、换行符等编辑器设置。
   - 在项目中设置代码风格规则，如 Airbnb 的 JavaScript 规范。

### 8. **版本管理 (SemVer)**
   使用 [语义化版本](https://semver.org/)（Semantic Versioning）对版本进行管理。版本号格式为 `MAJOR.MINOR.PATCH`：
   - `MAJOR`：重大变更，通常是破坏性更新。
   - `MINOR`：新增功能，不会破坏现有功能。
   - `PATCH`：小修复或改进，不涉及重大变更。

### 9. **Contributing 文档**
   提供一个 `CONTRIBUTING.md` 文件，说明如何贡献代码，包括：
   - 提交 Issue 的流程
   - 如何 fork 项目并创建 PR
   - 代码风格和测试要求

### 10. **LICENSE 文件**
   在项目中包含一个 `LICENSE` 文件，明确项目的开源协议，如 MIT、GPL、Apache 等。

这些规范有助于确保项目代码的可维护性、可读性以及协作效率。

### 11.仓库名称

在 GitHub 或其他版本控制平台上，仓库名称的规范性非常重要，以便于识别和管理项目。以下是一些常见的仓库名称规范和建议：

#### 1. **简洁明了**
   - 仓库名称应简短易读，直接描述项目的功能或目的。
   - 避免使用冗长或复杂的单词。

   **示例**:
   - `todolist`（任务清单应用）
   - `weather-api`（天气 API）

#### 2. **使用小写字母**
   - 推荐使用全小写字母来命名仓库，避免大写字母混用，以减少拼写错误和兼容性问题。

   **示例**:
   - `ecommerce-website`（电商网站）
   - `blog-engine`（博客引擎）

#### 3. **使用连字符分隔单词**
   - 使用 `-` 连字符分隔多个单词，而不是使用下划线 `_` 或驼峰命名法。这种格式更易读并符合 GitHub 的惯例。

   **示例**:
   - `image-processing-tool`（图像处理工具）
   - `machine-learning-models`（机器学习模型）

#### 4. **避免使用特殊字符**
   - 仓库名称中避免使用特殊字符（如 `@`、`#`、`$`、`%` 等），这会造成一些平台或系统的兼容性问题。

   **建议**: 只使用字母、数字和 `-`。

#### 5. **遵循语义化**
   - 仓库名称应尽可能表达项目的核心功能或性质。
   - 如果是一个库或工具，可以使用 `-lib` 或 `-tool` 后缀标明。

   **示例**:
   - `auth-service`（身份验证服务）
   - `data-visualization-tool`（数据可视化工具）

#### 6. **添加组织或项目类型前缀**
   - 如果项目属于特定组织或平台，建议加上前缀以表明项目的归属或用途。

   **示例**:
   - `taro-weather-app`（Taro框架的天气小程序）
   - `react-blog-template`（React 博客模板）

#### 7. **版本信息**
   - 如果仓库有不同的主要版本，可以在仓库名中附加版本号。

   **示例**:
   - `project-v2`（项目第二版）

#### 8. **避免与其他流行项目同名**
   - 避免仓库名称与其他常见项目冲突，尤其是在开源项目或公共平台上，这样可以避免混淆。

---

#### 仓库名称的格式建议
1. **项目名-用途**：`projectname-purpose`
   - `chatapp-api`（聊天应用的 API）
   - `portfolio-website`（个人作品集网站）

2. **项目名-语言或框架**：`projectname-framework`
   - `ecommerce-react`（电商项目使用 React）
   - `personal-website-vue`（个人网站使用 Vue）
