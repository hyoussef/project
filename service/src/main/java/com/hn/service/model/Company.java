package com.hn.service.model;


import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;


import data.model.def.ICompany;
import data.model.dto.CompanyDTO;


public class Company extends CompanyDTO{
	


	@XmlElement
	public List<Entity> entities = new ArrayList<Entity>();
}
