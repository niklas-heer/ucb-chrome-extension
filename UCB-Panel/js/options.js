// Generated by CoffeeScript 1.6.3
(function(){var e,t,n,r;r=function(){var e,t,n;e=document.getElementById("theme");n=e.children[e.selectedIndex].value;localStorage.fav_theme=n;t=$("#status").append('<div class="alert alert-success">Options Saved.</div>');t.show();return setTimeout(function(){t.hide();return t.html("")},750)};n=function(){var e,t,n,r,i;t=localStorage.fav_theme;if(!t)return;r=document.getElementById("theme");n=0;i=[];while(n<r.children.length){e=r.children[n];if(e.value===t){e.selected="true";break}i.push(n++)}return i};t=function(){document.title="UCB-Panel Einstellungen";return $(".container").append('		<div class="page-header">			<h1>Einstellungen <small>für das UCB-Panel</small></h1>		</div>		<div id="status"></div>		<p>Theme auswählen:		<select id="theme">			<option value="classic">klassisches Design</option>			<option value="simple">einfaches Design</option>		</select>		</p>		<br>		<button class="btn" id="save">Speichern</button>	')};e=function(){document.title="UCB-Panel settings";return $(".container").append('		<div class="page-header">			<h1>Settings <small>for the UCB-Panel</small></h1>		</div>		<div id="status"></div>		<p>Choose theme:		<select id="theme">			<option value="classic">classic design</option>			<option value="simple">simple design</option>		</select>		</p>		<br>		<button class="btn" id="save">Save</button>	')};$(document).ready(function(){var i;i=window.navigator.language;switch(i){case"de":t();break;case"en":e();break;default:e()}n();return document.querySelector("#save").addEventListener("click",r)})}).call(this);