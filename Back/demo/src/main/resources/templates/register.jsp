<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<html>
	<head>
		<!-- 합쳐지고 최소화된 최신 CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<!-- 부가적인 테마 -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	 	
	 	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<title>회원가입</title>
	</head>
	<script type="text/javascript">
		$(document).ready(function(){
			// 취소
			$(".cencle").on("click", function(){
				
				location.href = "/login";
						    
			})
		
			$("#submit").on("click", function(){

				if($("#id").val()==""){
					alert("아이디를 입력해주세요.");
					$("#id").focus();
					return false;
				}
				if($("#pw").val()==""){
					alert("비밀번호를 입력해주세요.");
					$("#pw").focus();
					return false;
				}
				if($("#name").val()==""){
					alert("이름을 입력해주세요.");
					$("#name").focus();
					return false;
				}
                if($("#nickname").val()==""){
					alert("닉네임를 입력해주세요.");
					$("#nickname").focus();
					return false;
				}
                if($("#address").val()==""){
					alert("주소를 입력해주세요.");
					$("#address").focus();
					return false;
				}
                if($("#num").val()==""){
					alert("전화번호를 입력해주세요.");
					$("#num").focus();
					return false;
				}
			});
			
				
			
		})
	</script>
	<body>
		<section id="container">
			<form action="/member/register" method="post">

                <div class="form-group has-feedback">
					<label class="control-label" for="name">이름</label>
					<input class="form-control" type="text" id="name" name="name" />
				</div>


				<div class="form-group has-feedback">
					<label class="control-label" for="id">아이디</label>
					<input class="form-control" type="text" id="id" name="id" />
				</div>
				<div class="form-group has-feedback">
					<label class="control-label" for="pw">패스워드</label>
					<input class="form-control" type="password" id="pw" name="pw" />
				</div>

				<div class="form-group has-feedback">
					<label class="control-label" for="nickname">닉네임</label>
					<input class="form-control" type="text" id="nickname" name="nickname" />
				</div>

                <div class="form-group has-feedback">
					<label class="control-label" for="address">주소</label>
					<input class="form-control" type="text" id="address" name="address" />
				</div>

                <div class="form-group has-feedback">
					<label class="control-label" for="userId">전화번호</label>
					<input class="form-control" type="text" id="num" name="num" />
				</div>


				<div class="form-group has-feedback">
					<button class="btn btn-success" type="submit" id="submit">회원가입</button>
					<button class="cencle btn btn-danger" type="button">취소</button>
				</div>
			</form>
		</section>
		
	</body>
	
</html>