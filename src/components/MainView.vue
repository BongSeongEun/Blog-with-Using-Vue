<template>
    <div class="main">
        
        <div class="maintitle">
            XML/JSON/YAML
        </div>

        <div class="mainparagraph">
            XML XML은 HTML과 유사한 구조를 가지고 있으며 특징으로는 꺽쇠를 사용한다는 점이 있다 홍길동 20 JSON JSON은 서버와의 통신 규약인 REST API를 사용할 때 주로 사용하며 모든 프로그래밍 언어에서 지원한다는 특징이 있다 { "users": { "1": { "name": "홍길동", "age": 20, }, } } YAML YAML은 태그, 즉 꺽쇠를 사용하지 않고 공백 위주로 데이터를 구분하...
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.main{
    text-align: left;
    margin-left: 4rem;
}
.maintitle{
    font-weight: bold;
    font-size: 20px;
}
.mainparagraph{
    width: 90%;
    margin-top: 1rem;
    color: gray;
}
</style>