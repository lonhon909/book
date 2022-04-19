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


### 2、git reset --- 回滚