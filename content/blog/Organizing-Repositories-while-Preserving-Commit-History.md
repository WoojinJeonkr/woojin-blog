---
external: false
title: "Organizing Repositories while Preserving Commit History"
description: "Flow of Code: Refining Repositories while Upholding Commit Records"
tag: [Git]
date: 2024-01-18
---

해당 글에서는 커밋 기록을 유지하면서 repository를 정리하는 방법에 대해 알아보겠습니다.

## 1. Repository Organization Methods

github에 repository를 생성해서 프로젝트를 진행하다보면 repository의 개수가 너무 많아져 정리할 필요성을 느끼게 되는 경험을 할 때가 있습니다.  
repository를 정리하는 방법은 2가지가 있습니다.

### 1-1. Repository Merging and Deletion

합쳐져서 남는 repository를 main-repo, 합쳐질 repository를 sub-repo라고 정의하겠습니다.  
먼저 두 repo를 git clone 해줍니다.

```bash
git clone https://github.com/your-github-name/main-repo
git clone https://github.com/your-github-name/sub-repo
```

이제 clone을 통해 다운 받은 sub-repo를 main-repo로 이동시키고 main-repo를 git add, commit & push 과정을 진행합니다.

```bash
git add .
git commit -m "Migrate sub repo" # 커밋 메시지는 마음대로 바꾸셔도 됩니다.
git push origin main # branch 명은 원하는 branch로 지정합니다.
```

이제 github에서 main-repo로 이동하여 main-repo 안에 sub-repo가 존재하는 것을 확인했다면 sub-repo를 git clone했던 폴더로 이동하여 sub-repo를 삭제합니다.  
그리고 github의 sub-repo에 들어가 Settings - Danger Zone - Delete this repository - I want to delete this repository - your-github-name/sub-repo 입력 후 삭제하시면 최종적으로 repository가 main-repo만 남아있는 상태를 확인하실 수 있습니다.  
이 방식으로 repository를 통합하고 삭제하는 경우, 기존 sub-repo에서 commit했던 기록들은 sub-repo를 삭제할 때 같이 삭제되게 됩니다.

### 1-2. Utilizing Subtree

git에는 git subtree라는 명령어가 있습니다.  
git subtree는 서브프로젝트를 별도로 유지하면서 기본 리포지토리와 서브프로젝트 간의 양방향 협업을 허용합니다.  

사용 방법은 다음과 같습니다.  
합쳐져서 남는 repository를 main-repo, 합쳐질 repository를 sub-repo라고 정의하겠습니다.  

먼저 main-repo를 git clone시켜줍니다.

```bash
git clone https://github.com/your-github-name/main-repo
```

이제 main-repo로 이동하여 아래와 같이 명령어를 작성해줍니다.

```bash
git subtree add --prefix="새로 생성할 폴더명" "https://github.com/your-github-name/sub-repo" main
```

위의 명령어에서 주의해야 할 점은 `새로 생성할 폴더명`이 sub-repo와 동일한 이름이면 안 된다는 것입니다.  
뒤의 main은 sub-repo에서 default로 지정되어 있는 branch를 입력하시면 됩니다.  
이제 명령어를 실행해보시면 main-repo에 `새로 생성할 폴더명`을 가진 폴더가 생겨 있는 것을 보실 수 있습니다.  
이제 git push를 통해 저장소를 최신화시켜주시고 github에 가서 확인해보시면 sub-repo의 commit 기록이 유지되어 있는 상태로 commit log가 저장되어 있는 모습을 확인하실 수 있습니다.

## 2. Reference

- [git docs](https://git-memo.readthedocs.io/en/latest/subtree.html)
