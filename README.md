# Angular study login

AngularとWeb Framework（今回はCakePHP3）を連携させてログイン認証を勉強する

# 進捗

view側はテンプレートっぽく用意している。

# ハマっているとこ

* CakePHP3のpluginであるCakeDC/usersを使ってログインしたいけど、このpluginがAjax用に対応されていないので、Observerパターンを使って、どうにか対応させきれないか探し中
* CROS originのエラーが発生している。恐らくCakePHP３側の問題

# ちと学んだこと

* CORSまとめ
http://qiita.com/tomoyukilabs/items/81698edd5812ff6acb34

* CakePHP3にはcorsをbuildするmethodがある
https://book.cakephp.org/3.0/ja/controllers/request-response.html#cors

* cakedc/usersのpluginはsecurityとcsrf componentを利用しているのでこいつらでエラー吐いているっぽい
    * まだ原因はあるっぽいが。。。


# 結論

SecurityComponentとCSRFComponentの値が取れればいいが、今のレベルだとできないので
CakePHP3側でログインフォームを用意して、ログインしたらAngualrのファイルが存在するページを表示するって形にします。
※でもログイン必須じゃないページはどうやってやる・・・？ うーん。
