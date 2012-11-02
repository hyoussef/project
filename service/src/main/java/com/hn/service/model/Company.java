package com.hn.service.model;


import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

import com.hn.service.model.def.ICompany;

import data.model.dto.CompanyDTO;


public class Company implements ICompany{



	private CompanyDTO dto ;
	public Company(){
		super();
		dto = new CompanyDTO();
	}
	public Company(CompanyDTO dto){
		this.dto = dto;
	}
	@Override
	@XmlElement
	public String getCode() {
		return dto.getCode();
	}

	@Override
	public void setCode(String code) {
		dto.setCode(code);
	}

	@Override
	@XmlElement
	public String getId() {
		return dto.getId();
	}

	@Override
	public void setId(String id) {
		dto.setId(id);
	}

	@Override
	@XmlElement
	public String getDescription() {
		return dto.getDescription();
	}

	@Override
	public void setDescription(String description) {
		dto.setDescription(description);		
	}

	@Override
	@XmlElement
	public String getName() {
		return dto.getName();
	}

	@Override
	public void setName(String name) {
		dto.setName(name);		
	}

	@Override
	@XmlElement
	public String getAdress() {
		return dto.getAdress();
	}

	@Override
	public void setAdress(String adress) {
		dto.setAdress(adress);		
	}

	@Override
	@XmlElement
	public String getVille() {
		return dto.getVille();
	}

	@Override
	public void setVille(String ville) {
		dto.setVille(ville);		
	}
	@XmlElement
	public List<Entity> entities = new ArrayList<Entity>();
}
