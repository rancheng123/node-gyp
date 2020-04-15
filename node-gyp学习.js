/*
node-gyp
    作用：  编译原生模块（C++）, 但是 不编译nodejs 本身
    依赖：
        macOS
            python
            Xcode

        windows
            Visual Studio
            Visual C++

            npm config set msvs_version 2017


   使用
        node-gyp
            <command>

            //指定python路径
            --python /path/to/executable/python

            //制定 Visual C++ Build Tools 2015 （Visual Studio2015）
            --msvs_version=2015


            //开启debug模式
            --debug



        node-gyp
            //为当前平台 生产合适的文件
            configure


        node-gyp build


        //??????
        npm config set
            python /path/to/executable/python




*/