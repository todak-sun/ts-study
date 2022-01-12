

```bash
  npm install -g verdaccio
```


docker build -t npm-repo:test .

docker run --name npm-repo -i -d -p 14873:4873 npm-repo:test 


config.yaml
정상 실행을 위해 0.0.0.0 바인딩 해줄것


npm adduser --registry http://localhost:4873

package.json에 publishConfig에 레지스트리 추가.

