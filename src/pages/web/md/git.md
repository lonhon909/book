# Git

Git 的分支也非常轻量。它们只是简单地指向某个提交纪录 —— 仅此而已

### 1、git stash --- 暂存

> git stash 存储是跨分支的
> 使用场景多样：如某个版本分支开发过程中，突然发现线上生产 `bug`，这个时候需要切换到其他分支修复，但当前发开中的分支不想提交，这个时候可以使用 `git stash` 存储，存储后本地分支的修改还原，就能放心切换分支了，问题修复之后再切换回开发分支，将之前存储的修改取出 `git stash apply`;

+ git stash save "message" 暂存修改，并添加备注说明
    - git stash 暂存修改，不加备注

+ git stash list 查看 `stash` 列表

+ git stash apply 应用某个存储，但不会从存储列表中删除，默认使用第一个存储 `stash@{0}`
    - git stash apply stash@{$index} 使用其他存储，如使用第三个存储 `stash@{2}`

+ git stash pop 应用某个存储，并在缓存堆栈中删除，默认使用第一个存储 `stash@{0}`
    - git stash pop stash@{$index} 使用其他存储并在缓存中删除

+ git stash drop stash@{$index} 删除/丢弃第 $index 个存储

+ git stash clear 删除所有的存储


### 2、git reset --- 回滚，删除提交记录

git reset HEAD^^
git reset HEAD~3

> 重置当前HEAD到指定的状态
> 如果要回退的提交已保存远端仓库，在本地分支回退后使用 `git push -f` 强制提交远程，这样远程也被回退

+ --soft 回退分支到某次提交状态，并将修改保存到`暂存区`，删除提交记录，本次回退不会当做一条操作记录
    - git reset --soft HEAD^^ 回退两次提交，并将修改保存在暂存区；如：a1->b1->c1，本地分支回退到 a1，并将b1与c1的修改保存在暂存区且删除b1与c1

+ --mixed 回退分支到某次提交状态，并将修改保存到`工作区`，删除提交记录，本次回退不会当做一条操作记录
    - git reset HEAD^（默认使用的是--mixed） | git reset --mixed HEAD^

+ --hard 回退分支到某次提交状态，并将修改丢弃（包括当前分支工作区的修改），删除提交记录，本次回退不会当做一条操作记录

+ --merge 与 --hard类似，但是不会丢弃工作区的修改，只会丢弃回退记录的修改


### 3、git revert -- 还原，不删除提交记录

> 不删除提交记录，并且将此次操作记录为一条新的记录