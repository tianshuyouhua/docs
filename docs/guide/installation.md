# 安装指南

完成 WorkBuddy 的安装和初始化设置。

## 系统要求

| 系统 | 最低配置 | 推荐配置 |
|-----|---------|---------|
| Windows | Win 10, 4GB RAM | Win 11, 8GB RAM |
| macOS | macOS 10.15+, 4GB RAM | macOS 12+, 8GB RAM |
| Linux | Ubuntu 20.04+, 4GB RAM | Ubuntu 22.04+, 8GB RAM |

## 下载与安装

### Windows

1. 访问官网下载 `.exe` 安装包
2. 双击安装包，按向导完成安装
3. 或使用包管理器：
   ```bash
   winget install Tencent.WorkBuddy
   ```

### macOS

1. 访问官网下载 `.dmg` 文件
2. 将 WorkBuddy 拖拽到 Applications 文件夹
3. 或使用 Homebrew：
   ```bash
   brew install workbuddy
   ```

### Linux

1. 下载 `.deb` 或 `.rpm` 包
2. 使用包管理器安装：
   ```bash
   # Debian/Ubuntu
   sudo dpkg -i workbuddy.deb
   
   # RHEL/Fedora
   sudo rpm -i workbuddy.rpm
   ```

## 首次启动

1. **登录**: 使用腾讯账号登录
2. **授权**: 授权必要的系统权限
3. **引导**: 完成新手引导教程
4. **设置工作目录**: 配置默认工作文件夹

## 下一步

- [快速开始](./getting-started.md) - 开始使用 WorkBuddy
- [功能说明](./features/) - 了解完整功能
