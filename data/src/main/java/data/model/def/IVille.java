package data.model.def;

import javax.xml.bind.annotation.XmlElement;

public interface IVille {

	@XmlElement
	public abstract long getId();
	
	public abstract void setId(long id);
	
	@XmlElement
	public abstract String getName();

	public abstract void setName(String name);

}