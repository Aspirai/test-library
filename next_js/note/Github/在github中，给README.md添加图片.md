 

一般我们将项目上传到[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020)后，会在README.md写对项目的描述以及使用方式。有时会添加效果图片，而在README.md中不能使用Ctrl+V添加图片，那如何在添加图片呢？

1. 先将图片上传到项目中，然后去到放你那张图片的文件夹下，点击并显示图片（如下），然后复制网址，即为该图片路径。

![](https://i-blog.csdnimg.cn/blog_migrate/caa19d92cd1f3158596d73cd3860f254.png)

例如我的图片路径是：[https://github.com/MaiEmily/map/blob/master/public/image/20190528145810708.png](https://github.com/MaiEmily/map/blob/master/public/image/20190528145810708.png)

2. 在README.md添加的图片格式：!\[image\](图片路径)，如下：

绝对路径写法：

!\[image\]([https://github.com/MaiEmily/map/blob/master/public/image/20190528145810708.png](https://github.com/MaiEmily/map/blob/master/public/image/20190528145810708.png))

相对路径写法：

!\[image\]([public/image/20190528145810708.png](https://github.com/MaiEmily/map/blob/master/public/image/20190528145810708.png))

![](https://i-blog.csdnimg.cn/blog_migrate/f7b7ce84f8ce04d5c530def34edf8f80.png)

然后点击“Preview changes”按钮进行预览，看看图片是否能够显示。（显示有时比较慢，等待几秒）

![](https://i-blog.csdnimg.cn/blog_migrate/4b560a8735c4572b40618d60ac8918e8.png)

本文转自 <https://blog.csdn.net/qq_41638795/article/details/91377437>，如有侵权，请联系删除。