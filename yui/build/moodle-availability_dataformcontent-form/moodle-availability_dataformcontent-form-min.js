YUI.add("moodle-availability_dataformcontent-form",function(e,t){M.availability_dataformcontent=M.availability_dataformcontent||{},M.availability_dataformcontent.form=e.Object(M.core_availability.plugin),M.availability_dataformcontent.form.dataforms=null,M.availability_dataformcontent.form.initInner=function(e){this.dataforms=e},M.availability_dataformcontent.form.getNode=function(t){var n="<label>"+M.util.get_string("title","availability_dataformcontent")+' <span class="availability-group">'+'<select name="id">'+'<option value="choose">'+M.util.get_string("choosedots","moodle")+"</option>";for(var r=0;r<this.dataforms.length;r++){var i=this.dataforms[r];n+='<option value="'+i.id+'">'+i.name+"</option>"}n+="</select></span></label>";var s=e.Node.create("<span>"+n+"</span>");t.id!==undefined&&s.one("select[name=id] > option[value="+t.id+"]")&&s.one("select[name=id]").set("value",""+t.id);if(!M.availability_dataformcontent.form.addedEvents){M.availability_dataformcontent.form.addedEvents=!0;var o=e.one("#fitem_id_availabilityconditionsjson");o.delegate("change",function(){M.core_availability.form.update()},".availability_dataformcontent select")}return s},M.availability_dataformcontent.form.fillValue=function(e,t){var n=t.one("select[name=id]").get("value");n==="choose"?e.id="choose":e.id=parseInt(n,10)},M.availability_dataformcontent.form.fillErrors=function(e,t){var n={};this.fillValue(n,t),n.id==="choose"&&e.push("availability_dataformcontent:error_selectdataform")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});
