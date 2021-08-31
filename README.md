
Required file:

`urls.json`

File schema:

```
File {
    url: string
    userAgent?: {
        name: string
        device: string
    }[]
}[]
```

example:

```[{
    "url": "https://google.com",
    "userAgent": [
        {
            "name": "MOBILE",
            "device": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36"
        },
        {
            "name": "DESKTOP",
            "device": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"
        }
    ]
}]
```