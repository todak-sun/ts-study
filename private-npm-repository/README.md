

```bash
  npm install -g verdaccio
```


docker build -t npm-repo:test .

docker run --name npm-repo -i -d -p 8002:4873 npm-repo:test 


정상 실행을 위해 0.0.0.0 바인딩 해줄것